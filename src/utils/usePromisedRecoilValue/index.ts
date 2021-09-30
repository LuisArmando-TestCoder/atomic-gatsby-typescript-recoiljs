import { useEffect, useState }  from 'react'
import { promiseGetRecoil } from 'recoil-outside'
import { RecoilValue } from 'recoil'

interface Options {
    transform?: (recoilValue: RecoilValue<any>) => any
    fallbackValue?: any
}

export default (recoilState, options: Options = {
    transform: null,
    fallbackValue: null,
}) => {
    const [state, setState] = useState(options.fallbackValue)

    useEffect(() => {        
        (
            async () => {
                const value = await promiseGetRecoil(recoilState)

                setState(
                    options.transform ? options.transform(value) : value
                )
            }
        )()
    }, [])

    return state
}