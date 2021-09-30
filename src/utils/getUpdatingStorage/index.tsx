import { getWindow } from 'ssr-window'

export default (
    valueName: string,
    storageType: 'local' | 'session' = 'local'
) => ({
    effects_UNSTABLE: [
        ({onSet}) => {
            
            onSet(value => {
                getWindow()[`${storageType}Storage`]?.setItem(
                    valueName,
                    JSON.stringify(value)
                )
            })
        }
    ]
})