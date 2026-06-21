import {
    PiHouseLineDuotone,
    PiArrowsInDuotone,
    PiBookOpenUserDuotone,
    PiBookBookmarkDuotone,
    PiAcornDuotone,
    PiBagSimpleDuotone,
    PiTruckDuotone,
    PiUserDuotone,
    PiIdentificationCardDuotone,
    PiHandshakeDuotone,
} from 'react-icons/pi'
import type { JSX } from 'react'

export type NavigationIcons = Record<string, JSX.Element>

const navigationIcon: NavigationIcons = {
    // Legacy defaults
    home: <PiHouseLineDuotone />,
    singleMenu: <PiAcornDuotone />,
    collapseMenu: <PiArrowsInDuotone />,
    groupSingleMenu: <PiBookOpenUserDuotone />,
    groupCollapseMenu: <PiBookBookmarkDuotone />,
    groupMenu: <PiBagSimpleDuotone />,

    // Fleet / SSE ERP icons
    fleet: <PiTruckDuotone />,
    user: <PiUserDuotone />,
    'id-badge': <PiIdentificationCardDuotone />,
    truck: <PiTruckDuotone />,
    handshake: <PiHandshakeDuotone />,
}

export default navigationIcon
