import { Pipe, PipeTransform } from '@angular/core';
import { NotificationType } from './constants';
import { IconName } from '../icons/constants';

@Pipe({
  name: 'toHeaderIcon',
})
export class NotificationTypeToHeaderIconPipe implements PipeTransform {
  transform(type: NotificationType): IconName | undefined {
    if (type === 'success') {
      return 'check-circle-outline';
    }
    if (type === 'warning') {
      return 'warning-amber';
    }
    if (type === 'error') {
      return 'error-outline';
    }
    return type === 'info' ? 'info' : undefined;
  }
}
