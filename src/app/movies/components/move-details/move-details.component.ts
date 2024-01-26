import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'app-move-details',
  templateUrl: './move-details.component.html',
  styleUrls: ['./move-details.component.scss']
})
export class MoveDetailsComponent implements OnInit {
  getMovieDetailResult:any;
  getMovieVedioResult:any;
  getMovieCastResult:any;

  constructor(private service:MovieApiServiceService , private router:ActivatedRoute){}
  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId,"getParamId##");
    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
  }

  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe((result)=> {
      console.log(result,"moveDetails##");
      this.getMovieDetailResult = result;
      //console.log(this.getMovieDetailResult,"getMovieDetailResult##");

    });
  }

  getVideo(id:any){
    this.service.getMovieVideo(id).subscribe((result)=>{
      console.log(result,"getMovieVideo##");
      result.results.forEach((element:any) => {
        if(element.type=="Trailer"){
          this.getMovieVedioResult = element.key;
        }
      });
     
    });
  }

  getMovieCast(id:any){
    this.service.getMovieCast(id).subscribe((result)=>{
      console.log(result,"getMovieCastResult##");
      this.getMovieCastResult= result.cast;
    })
  }


}
