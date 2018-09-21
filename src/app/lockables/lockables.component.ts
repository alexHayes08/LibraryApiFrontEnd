import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LockablesService } from './lockables.service';

@Component({
  selector: 'app-lockables',
  templateUrl: './lockables.component.html',
  styleUrls: ['./lockables.component.css']
})
export class LockablesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private lockablesService: LockablesService
  ) { }

  ngOnInit() {
  }

}
