import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from '../services/movie-api-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  constructor(private service: MovieApiServiceService) {}
  bannerResult: any = [];
  trendingMoveResult: any = [];
  actionMoveResult: any = [];
  adventureMoveResult: any = [];
  animationMoveResult: any = [];
  comedyMoveResult: any = [];
  documentaryMoveResult: any = [];
  ScienceFectionMoveResult: any = [];
  ThrillerMoveResult: any = [];
  CrimeMoveResult: any = [];
  DramaMoveResult: any = [];
  FamilyMoveResult: any = [];

  ngOnInit(): void {
    this.bannerdata();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.animationMovie();
    this.comedyMovie();
    this.documentaryMovie();
    this.ScienceFectionMovie();
    this.ThrillerMovie();
    this.CrimeMovie();
    this.DramaMovie();
    this.FamilyMovie();
  }
  //bannerdata
  bannerdata() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
      console.log(this.bannerResult);
    });
  }

  //trendingdata
  trendingData() {
    this.service.trendingMoveApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');

      this.trendingMoveResult = result.results;
    });
  }

  //action
  actionMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      console.log(result, 'actionMovie#');

      this.actionMoveResult = result.results;
    });
  }

  //adventure
  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      console.log(result, 'adventureMovie#');

      this.adventureMoveResult = result.results;
    });
  }

  //animation
  animationMovie() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      console.log(result, 'animationMovies#');

      this.animationMoveResult = result.results;
    });
  }

  //comedy
  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((result) => {
      console.log(result, 'comedyMovie#');

      this.comedyMoveResult = result.results;
    });
  }

  //documentary
  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      console.log(result, 'documentaryMovie#');

      this.documentaryMoveResult = result.results;
    });
  }

  //ScienceFection
  ScienceFectionMovie() {
    this.service.fetchScienceFectionMovies().subscribe((result) => {
      console.log(result, 'ScienceFectionMovie#');

      this.ScienceFectionMoveResult = result.results;
    });
  }

  //Thriller
  ThrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      console.log(result, 'ThrillerMovie#');

      this.ThrillerMoveResult = result.results;
    });
  }

   //crime
   CrimeMovie() {
    this.service.fetchCrimeMovies().subscribe((result) => {
      console.log(result, 'CrimeMovie#');

      this.CrimeMoveResult = result.results;
    });
  }

  //Drama
  DramaMovie() {
    this.service.fetchDramaMovies().subscribe((result) => {
      console.log(result, 'DramaMovie#');

      this.DramaMoveResult = result.results;
    });
  }

 

  //Family
  FamilyMovie() {
    this.service.fetchFamilyMovies().subscribe((result) => {
      console.log(result, 'FamilyMovie#');

      this.FamilyMoveResult = result.results;
    });
  }
}
