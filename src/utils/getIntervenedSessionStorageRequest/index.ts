import { getWindow } from 'ssr-window'

export default async url => {
    const data = getWindow().sessionStorage?.getItem(url)

    if (data) {
        try {
            return JSON.parse(data)
        } catch {
            return
        }
    }

    const blob = await fetch(url)
    const json = await blob.json()

    getWindow().sessionStorage?.setItem(
        url,
        JSON.stringify(json)
    )

    return json
}