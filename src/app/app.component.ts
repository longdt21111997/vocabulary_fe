import {PageChangeEvent, GridDataResult} from "@progress/kendo-angular-grid";
import {Component, OnInit} from "@angular/core";
import {products} from "./products";
import {PagerSettings} from '@progress/kendo-angular-grid/dist/es2015/pager/pager-settings';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AppService} from './app.service';
import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';
import {MatDialog} from '@angular/material/dialog';
import {$e} from '@angular/compiler/src/chars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public gridView?: GridDataResult;
  private items?: any[];
  public pageSize?: number;
  public skip?: number;
  public pageAbleSetting?: PagerSettings;
  public isSearching: boolean;
  searchForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _appService: AppService,
    private _toa: ToastrService,
    private _modalService: MatDialog,
    private _spinner: NgxSpinnerService
  ) {

  }

  ngOnInit(): void {
    this.declareVariable();
    this.loadItems();
  }

  declareVariable() {
    this.isSearching = false;
    this.pageAbleSetting = {
      buttonCount: 5,
      info: true,
      type: "numeric",
      pageSizes: true,
      previousNext: true,
      responsive: true
    }
    this.gridView = {
      data: [],
      total: 0,
    };
    this.pageSize = 20;
    this.items = products;
    this.skip = 0;

    this.searchForm = this._formBuilder.group({
      en: [],
      vn: []
    });
  }

  pageChange({skip, take}: PageChangeEvent): void {
    this.skip = skip;
    this.pageSize = take;
    this.items = products;
    this.loadItems();
  }

  private loadItems(): void {
    this._appService.doSearchWord(this.searchForm.controls.en.value,this.searchForm.controls.vn.value,this.pageSize,this.skip)
      .subscribe(response => {
        if(response.result){
          this.gridView = {
            data: response.data,
            total: response.meta_data.totalRecords,
          };
        }
      })
  }

  clearEnSearch() {
    this.searchForm = this._formBuilder.group({
      en: [],
      vn: [this.searchForm.controls.vn.value]
    });
    this.loadItems();
  }

  clearVnSearch() {
    this.searchForm = this._formBuilder.group({
      en: [this.searchForm.controls.en.value],
      vn: []
    });
    this.loadItems();
  }

  enInputChange() {
    this.loadItems();
  }

  vnInputChange() {
    this.loadItems();
  }
}
