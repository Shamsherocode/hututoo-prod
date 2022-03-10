import { Component, OnInit } from '@angular/core';
// import Chart from 'chart.js';

declare var $:any;

declare interface DataTable {
  headerRow: string[];
  // footerRow: string[];
  dataRows: string[][];
}


@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    public dataTable: DataTable;
    public doctorTable: DataTable;
    ngOnInit(){
        this.dataTable = {
            headerRow: [ 'payment id', 'patient name', 'date of service', 'status', 'amount' ],
            // footerRow: [ 'Name', 'Position', 'Office', 'Age', 'Start Date' ],
            dataRows: [
                ['Airi Satou', 'Andrew Mike', 'Develop', '2013', '99,225',''],
                ['Angelica Ramos', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
                ['Ashton Cox', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
                ['Bradley Greer','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Brenden Wagner', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
                ['Brielle Williamson','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Caesar Vance','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Cedric Kelly','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Charde Marshall','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Colleen Hurst','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Dai Rios', 'Andrew Mike', 'Develop', '2013', '99,225',''],
                ['Doris Wilder', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
                ['Fiona Green', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
                ['Garrett Winters','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Gavin Cortez', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
                ['Gavin Joyce','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Gloria Little','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Haley Kennedy','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Herrod Chandler','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Herrod Chandler','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round']
            ]
         };

         this.doctorTable = {
          headerRow: [ 'payment id', 'patient name', 'date of service', 'status', 'amount' ],
          // footerRow: [ 'Name', 'Position', 'Office', 'Age', 'Start Date' ],
          dataRows: [
              ['Airi Satou', 'Andrew Mike', 'Develop', '2013', '99,225',''],
              ['Angelica Ramos', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
              ['Ashton Cox', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
              ['Bradley Greer','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
              ['Brenden Wagner', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
              ['Brielle Williamson','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
              ['Caesar Vance','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
              ['Cedric Kelly','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
              ['Charde Marshall','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
              ['Colleen Hurst','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
              ['Dai Rios', 'Andrew Mike', 'Develop', '2013', '99,225',''],
              ['Doris Wilder', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
              ['Fiona Green', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
              ['Garrett Winters','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
              ['Gavin Cortez', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
              ['Gavin Joyce','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
              ['Gloria Little','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
              ['Haley Kennedy','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
              ['Herrod Chandler','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
              ['Herrod Chandler','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round']
          ]
       };
    }

    ngAfterViewInit(){
      $('#datatable').DataTable({
        "pagingType": "full_numbers",
        "lengthMenu": [
          [10, 25, 50, -1],
          [10, 25, 50, "All"]
        ],
        responsive: true,
        language: {
          search: "_INPUT_",
          searchPlaceholder: "Search records",
        }

      });

      $('#doctorTable').DataTable({
        "pagingType": "full_numbers",
        "lengthMenu": [
          [10, 25, 50, -1],
          [10, 25, 50, "All"]
        ],
        responsive: true,
        language: {
          search: "_INPUT_",
          searchPlaceholder: "Search records",
        }

      });


    }
}
