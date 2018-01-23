import {EventEmitter, Injectable} from '@angular/core';
import {StompService, StompState} from '@stomp/ng2-stompjs';
import { Observable } from 'rxjs/Observable';
// Stream of messages
import {Message} from '@stomp/stompjs';

import { Subscription } from 'rxjs/Subscription';
import {YO} from './yo/YO';

@Injectable()
export class WebSocketService {

  // Subscription status
  public subscribed: boolean;
  // Stream of messages
  private subscription: Subscription;
  public messages: Observable<Message>;

  yos: YO[] = new Array<YO>();

  yoReceived = new EventEmitter<YO>();
  constructor(private _stompService: StompService) { }


  public subscribe() {
    if (this.subscribed) {
      return;
    }

    // Stream of messages
    this.messages = this._stompService.subscribe('/stompresponse');

    // Subscribe a function to be run on_next message
    this.subscription = this.messages.subscribe(this.on_next);

    this.subscribed = true;
  }

  public unsubscribe() {
    if (!this.subscribed) {
      return;
    }

    // This will internally unsubscribe from Stomp Broker
    // There are two subscriptions - one created explicitly, the other created in the template by use of 'async'
    this.subscription.unsubscribe();
    this.subscription = null;
    this.messages = null;

    this.subscribed = false;
  }

  /** Consume a message from the _stompService */
  public on_next = (message: Message) => {

    // Log it to the console
    console.log('[on_next]', message);
    const yo = JSON.parse(message.body);

    if (yo['origin'] && yo['target'] && yo['yo']) {
      this.yos.push(yo);
      this.yoReceived.emit(yo);
    }
  }
}
