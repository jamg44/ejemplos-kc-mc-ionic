import { Component } from '@angular/core';
import { NavController, IonicPage, App } from 'ionic-angular';
import { Api, Movie } from '../../providers/index';
import { MOVIE_DETAIL_PAGE } from '../pages.constants';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  movies: Movie[];

  constructor(
    public navCtrl: NavController,
    public api: Api,
    public appCtrl: App
  ) {}

  ionViewDidLoad() {
    //console.log('HomePage ionViewDidLoad');
    this.loadMoviesList();
  }

  ionViewDidEnter() {
    //console.log('HomePage ionViewDidEnter');
  }

  ionViewDidLeave() {
    //console.log('HomePage ionViewDidLeave');
  }

  ionViewWillUnload() {
    //console.log('HomePage ionViewWillUnload');
  }

  loadMoviesList() {
    const $movies = this.api.getMovies();
    $movies.subscribe(movies => {
      this.movies = movies;
      console.log('movies', movies);
    });
    return $movies;
  }

  doRefresh(event) {
    this.loadMoviesList().subscribe( movies => {
      event.complete();
    });
  }

  gotoMovieDetail(movie) {
    this.navCtrl.push(MOVIE_DETAIL_PAGE, {
      movie: movie
    });
  }

  pruebaNav() {
    // navega poniendo en el stack de páginas
    // this.navCtrl.push(MOVIE_DETAIL_PAGE);

    // navega poniendo como la primera del stack
    // this.navCtrl.setRoot(MOVIE_DETAIL_PAGE);

    // navega poniendo en el stack del rootNav (sin tabs)
    //this.appCtrl.getRootNav().push(MOVIE_DETAIL_PAGE);

    // navega en el rootNav (sin tabs) sin vuelta
    this.appCtrl.getRootNav().setRoot(MOVIE_DETAIL_PAGE);
  }

}
