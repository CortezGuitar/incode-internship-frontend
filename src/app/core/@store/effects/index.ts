import { LoginEffects } from './auth.effects';
import { NotificationsEffects } from './notifications.effects';

export const effects: any[] = [ LoginEffects, NotificationsEffects ];

export * from './auth.effects';
export * from './notifications.effects';
