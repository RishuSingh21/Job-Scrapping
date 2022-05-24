import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job';
import { JobdataService } from 'src/app/service/jobdata.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs: Job[] = [];
  constructor(private jobdataService: JobdataService) { }

  ngOnInit() {
    this.jobs = this.jobdataService.getData();
  }

}
