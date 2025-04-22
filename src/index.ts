import {} from '@dcl/sdk/math'
import { engine } from '@dcl/sdk/ecs'
import { setupUi } from './ui'
import { initDispensers } from './modules/dispenser/dispensers'

export function main() {
    setupUi()

    initDispensers()
}
