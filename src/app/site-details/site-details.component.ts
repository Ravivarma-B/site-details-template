import { Component, OnInit } from '@angular/core';
import { DomainService } from '../services/domain.service';

@Component({
  selector: 'app-site-details',
  templateUrl: './site-details.component.html',
  styleUrls: ['./site-details.component.scss']
})
export class SiteDetailsComponent implements OnInit {

  constructor(private domainSvc: DomainService) { }

  domains: any;
  filteredDomainData: any = [];
  pageSize: number = 10;
  showAddPopUp = false;

  ngOnInit() { this.fetchDomainData(); }

  fetchDomainData() {
    this.domainSvc.getDomainData().subscribe((d: any) => { this.domains = d; this.filteredDomainData = this.domains.slice(); });
  }

  addDomain() {
    
  }

  get domainData() {
    if (!this.filteredDomainData || this.filteredDomainData.length == 0) return [];
    return this.filteredDomainData.slice(0, this.pageSize);
  }

  filterData(search: any) { this.filteredDomainData = this.domains.filter((d:any) => d.domain.includes(search.target.value)); }

  changePageSize(pageSize: any) { this.pageSize = parseInt(pageSize.target.value); }

  convertStorage(s1: string, s2: string) {
    if (!s1 || !s2) return 0;
    return parseInt(s1.slice(0, s1.length - 3)) / parseInt(s2.slice(0, s2.length - 3)) * 100 + '%';
  }

  convertVisitor(domain: any) {
    if (!domain.storage) return 0;
    return domain.montlyVisitor / domain.monthlyVisitorCapacity * 100 + '%';
  }
}
