import React, {
	useEffect
} from 'react'
import {
    times as timesState
} from '../../../state'
import {
    useRecoilState
} from 'recoil'
import './styles.scss'

export default ({
	className = '',
	children
}) => {
	const [times, setTimes] = useRecoilState(timesState)

	useEffect(() => {
		setTimeout(() => {
			setTimes(times + 1)
		}, 500)
	}, [times])

	return (
		<h1 className={`hello ${className}`}>
			<i className='hello__greeting'>
				Hello, {children}
			</i>
			<br/>
			You are
			{' '}
			<b className='hello__highlight'>
				{times}
			</b>
			{' '}
			times
			<br/>
			the 👉 coolest!
		</h1>
	)
}