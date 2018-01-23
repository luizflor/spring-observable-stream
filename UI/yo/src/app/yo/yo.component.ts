import {Component, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {StompService, StompState} from '@stomp/ng2-stompjs';
import { Observable } from 'rxjs/Observable';
// Stream of messages
import {Message} from '@stomp/stompjs';

import { Subscription } from 'rxjs/Subscription';

import 'rxjs/Rx';
import {YoService} from '../../yo.service';
import {YO} from './YO';
import {Constants} from '../Contants';
import {WebSocketService} from '../WebSocketService';

@Component({
  selector: 'yo-yo',
  templateUrl: './yo.component.html',
  styleUrls: ['./yo.component.css']
})
export class YoComponent implements OnInit, OnDestroy {

  public state: Observable<string>;
  me = 'me';
  peers: string[];
  yos: YO[];
  modalReference: any;
  closeResult: string;
  baseUrl= Constants.baseUrl;
  selectedParty = '';

  // Subscription status
  // public subscribed: boolean;
  // // Stream of messages
  // private subscription: Subscription;
  // public messages: Observable<Message>;

  private sub: any;

  constructor(private _stompService: StompService,
              private _yoService: YoService,
              private _webSocketService: WebSocketService,
              vcr: ViewContainerRef,
              private modalService: NgbModal) { }

  ngOnInit() {
    console.log('Status init');
    this.getMe();
    this.getPeers();
    this.getYos();
    this.state = this._stompService.state.map((state: number) => StompState[state]);

    // this.subscribed = false;

    // Store local reference to Observable
    // for use with template ( | async )
    // this.subscribe();
    this._webSocketService.subscribe();
    this.sub = this._webSocketService.yoReceived.subscribe(yo => this.yos.push(yo));
  }

  ngOnDestroy() {
    // this.unsubscribe();
    this.sub.unsubscribe();
    this._webSocketService.unsubscribe();
  }

  getMe() {
    this._yoService.getMe(this.baseUrl + '/yo/myname')
      .subscribe(resp => {
        console.log('[resp]', resp);
        this.me = resp;
        },
      err => console.log(err));
  }

  getPeers() {
    this._yoService.getPeers(this.baseUrl + '/yo/peersnames')
      .subscribe(resp => {
          this.peers = resp.peers;
          console.log('[getPeers]', this.peers);
        },
        err => console.log(err));
  }

  getYos() {
    this._yoService.getYos(this.baseUrl + '/yo/getyos')
      .subscribe(resp => {
          this.yos = resp as YO[];
          console.log('[getYos]', this.yos);
        },
        err => console.log(err));
  }

  onSendYO() {
    this._yoService.sendYos(this.baseUrl + '/yo/sendyo', this.selectedParty)
      .subscribe(resp => {
          // console.log('[nSendYO]', resp);
          this.onCancel();
        },
        err => {
        console.log('[onSendYO]', err);
          this.onCancel();
      });
  }

  // openSendYoModal() {
  //   console.log('[openSendYoModal]');
  // }
  onCancel() {
    this.modalReference.close();
  }
  open(content) {
    const options: NgbModalOptions = {
      size: 'lg',
      windowClass: 'zoomIn animated',
      beforeDismiss: () => {
        // this does not work
        content.windowClass = 'rollOut animated';
        return true;
      }
    };
    const notMe = this.peers.filter(x => x !== this.me);
    this.selectedParty = notMe.length > 0
      ? notMe[0]
      : '';
    this.modalReference = this.modalService.open(content, options);
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed `;
    });
  }
/*
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
*/
  /** Consume a message from the _stompService */
  /*
  public on_next = (message: Message) => {

     // Log it to the console
    console.log('[on_next]', message);
    const yo = JSON.parse(message.body);

    if (yo['origin'] && yo['target'] && yo['yo']) {
      this.yos.push(yo);
    }
  }
  */
}
