import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchResult:any;

      constructor(private service:MovieApiServiceService){}
      ngOnInit(): void {
        
      }

      searchForm = new FormGroup({
        'movieName':new FormControl(null)
      });

      submitForm(){
        console.log(this.searchForm.value,'searchReasult#');
        this.service.getSearchMovie(this.searchForm.value).subscribe((result)=>{
          console.log(result,'searchmovie##');
          this.searchResult = result.results;
        })
      }
}
