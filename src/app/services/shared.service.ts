import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  public selectedTopic: string;
  public signIn = false;
  public loggedUser: string;
  public loggedUserUID: string;
  public categorieToAks: string;
  constructor() { }

}
