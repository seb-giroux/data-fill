import type { Category } from '../types'
import { cardholder } from './cardholder'
import { credential } from './credential'
import { detectionEvent } from './detection-event'
import { device } from './device'
import { generic } from './generic'
import { user } from './user'

export const categories: Category[] = [user, device, detectionEvent, cardholder, credential, generic]
