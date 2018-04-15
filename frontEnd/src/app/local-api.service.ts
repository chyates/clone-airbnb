import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LocalApiService {

  constructor(private _http: Http) { }

  // User functions: register, login/out, update, current, toHost
  registerUser(user) {
    return this._http.post('/api/users/register', user)
      .map(response => response.json())
      .toPromise();
  }

  loginUser(user) {
    return this._http.post('api/users/login', user)
      .map(response => response.json())
      .toPromise();
  }

  currentUser() {
    return this._http.get('/api/users/current')
      .map(response => response.json())
      .toPromise();
  }

  logoutUser() {
    return this._http.get('/api/users/logout')
      .map(response => response.json())
      .toPromise();
  }

  updateUser(id, user) {
    return this._http.post(`/api/users/${id}/update`, user)
      .map(response => response.json())
      .toPromise();
  }

  toHost(id, user) {
    return this._http.post(`/api/users/${id}/host`, user)
      .map(response => response.json())
      .toPromise();
  }

  findOne(id){
    return this._http.get(`/api/users/${id}`)
    .map(response => response.json())
    .toPromise();
  }

  // User property functions: create, update, delete
  // User property URLS:
  //   /api/users/{id}/props/create
  //   /api/users/{id}/props/update
  //   /api/users/{id}/props/delete

  // Listing functions: create, findAll, search, findAllUser, findOne, findRecent, update, delete
  createListing(listing) {
    console.log("Hit service! Creating listing")
    return this._http.post(`/api/listings/create`, listing)
      .map(response => response.json())
      .toPromise();
  }

  findAllListings() {
    return this._http.get('/api/listings')
      .map(response => response.json())
      .toPromise();
  }

  searchListings(location) {
    var city = { 'location': location }
    return this._http.post('/api/listings/search', city)
      .map(response => response.json())
      .toPromise();
  }

  findAllUserListings(id) {
    return this._http.get(`/api/users/${id}/listings`)
      .map(response => response.json())
      .toPromise();
  }

  findOneListing(id) {
    return this._http.get(`/api/listings/${id}`)
      .map(response => response.json())
      .toPromise();
  }

  findRecentLand() {
    return this._http.get('/api/listings/landing/recent')
      .map(response => response.json())
      .toPromise();
  }

  findRecentList() {
    console.log("Hit service, recent listings:listings");
    return this._http.get('/api/listings/listings/recent')
      .map(response => response.json())
      .toPromise();
  }

  updateListing(id, listing) {
    return this._http.post(`/api/listings/${id}/update`, listing)
      .map(response => response.json())
      .toPromise();
  }

  // Reservation functions: create, approve (host), update (guest), viewAll, viewOne, findAllListing, findAllUser, cancel (delete)
  createReserve(id, reservation) {
    return this._http.post(`/api/reservations/create`, reservation)
      .map(response => response.json())
      .toPromise();
  }

  approveBooking(id, bookChange) {
    return this._http.post(`/api/reservations/{$id}/approve`, bookChange)
      .map(response => response.json())
      .toPromise();
  }

  updateReservation(id, reservation) {
    return this._http.post(`/api/reservations/{$id}/update`, reservation)
      .map(response => response.json())
      .toPromise();
  }

  viewAllReserves(id) {
    return this._http.get(`/api/users/${id}/reservations`)
      .map(response => response.json())
      .toPromise();
  }

  viewOneReserve(id, reserveId) {
    return this._http.get(`/api/users/${id}/reservations/${reserveId}`)
      .map(response => response.json())
      .toPromise();
  }

  // Review functions: add, findAllListing, findAllUser, delete
  addReview(id, review) {
    return this._http.post(`/api/listings/${id}/create`, review)
      .map(response => response.json())
      .toPromise();
  }

  findAllReviews(listingId) {
    return this._http.get(`/api/listings/${listingId}/reviews`)
      .map(response => response.json())
      .toPromise();
  }

  // Conversation functions: create (send guest/host), viewAllGuest, viewAllHost, viewOne, delete
  sendGuestMessage(id, message) {
    return this._http.post(`/api/users/${id}/messages/create/guest`, message)
      .map(response => response.json())
      .toPromise();
  }

  sendHostMessage(id, message) {
    return this._http.post(`/api/users/${id}/messages/create/host`, message)
      .map(response => response.json())
      .toPromise();
  }

  viewAllGuest(id) {
    return this._http.get(`/api/users/${id}/inbox/guest`)
      .map(response => response.json())
      .toPromise();
  }

  viewAllHost(id) {
    return this._http.get(`/api/users/${id}/inbox/host`)
      .map(response => response.json())
      .toPromise();
  }

  findOneMessage(id, messageId) {
    return this._http.get(`/api/users/${id}/inbox/messages/${messageId}`)
      .map(response => response.json())
      .toPromise();
  }
  // Location functions: create (as host), findLastCreated, search, findListingByLoc
  createLocation(location){
    return this._http.post('/api/locations/create', location)
    .map(response => response.json())
    .toPromise();
  }

  findLastCreated(){
    return this._http.get('/api/locations/last')
    .map(response => response.json())
    .toPromise();
  }
}

