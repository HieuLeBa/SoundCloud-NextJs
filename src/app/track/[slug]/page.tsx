'use client'

import WaveTrack from "@/components/track/wave.track"
import { useSearchParams } from "next/navigation"

const DetailTrackPage = (props: any) => {
    const { param } = props
    const searchParams = useSearchParams()
    const search = searchParams.get('audio')
    return (
        <div>asdasdsa
            <div>
                <WaveTrack />
            </div>
        </div>
    )
}
export default DetailTrackPage