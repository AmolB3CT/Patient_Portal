import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Appointments } from '../app.model';
import { LoginModel, UserDetails } from '../login/login.component';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  appointmentsData:any[]=[];

  url: any = '/users/registration';
  constructor(private http: HttpClient) { }

  addPerson(person: UserDetails): Observable<any> {
    const headers = { 'Content-Type': 'application/json' }
    const body = JSON.stringify(person);
    // console.log(body)
    return this.http.post('/users/registration', body, { 'headers': headers });
  }

  getData(): Observable<any[]> {
    return this.http.get<any[]>('/users/registration')
  }

  getPhysicianDataById(username: string): Observable<any> {
    let configUrl = '/data/physicians';

    return this.http.get<any>(`${configUrl}/${username}`);

  };

  addLoginData(u: any): Observable<any> {

    const headers = { 'Content-Type': 'application/json' }
    const body = JSON.stringify(u);
    // console.log(body)
    return this.http.post('/data/physicians', body, { 'headers': headers })
  }
  getPatientDataById(physicianname: string, patientname: string,patient_time: string): Observable<any> {

    console.log(patientname)

    console.log("username", physicianname)



    let configUrl = '/data/physicians';

    console.log(this.http.get<any>(`${configUrl}/${physicianname}`))


    return this.http.get<any>(`${configUrl}/${physicianname}`).pipe(

      map((response) => {

        console.log("sdjk;aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")

        console.log(response.data)

        console.log(response.data.patientsDetails)

        console.log(response.data.patientsDetails.filter((item: any) => item.username == patientname));
        

        return response.data.patientsDetails.filter((item: any) => (item.username == patientname && item.schedule_time == patient_time));

      })

    )

  }


  // data(): Observable<any>
  // {

  //   const headers = { 'Content-Type': 'application/json'}  
  //   const body={
  //     "email": "olivier@mail.com",
  //     "password": "bestPassw0rd"
  //   }  
  //   return this.http.post('http://localhost:3000/users/register', body,{'headers':headers})
  // }
  getDataById(username: string): Observable<any> {
    return this.http.get<any>(`${this.url}/${username}`);
  }

  updateActiveStatus(id: any, body: any) {
    console.log(id)
    return this.http.put<any>('/users/updateFlag' + '/' + id, body);
  }
  updateDemographics(id: any, body: any) {
    return this.http.put<any>('/users/registration' + '/' + id, body);
  }
  getPhysicianData() {
    let configUrl = '/data/physicians';

    return this.http.get<any>(configUrl);

  }

   //  const headers = { 'Content-Type': 'application/json'}  
    //  const body=JSON.stringify(u);
    // console.log(body)
  addAppointmentData(id: any, body: any) {
    let Obj = new Observable()
    return this.http.put('/data/shedule-appointment' + '/' + id, body).pipe(map(res => { return res }))
  }

  addAppointmentDataPach(id: any, body: any) {
    return this.http.patch('http://localhost:3000/physician' + '/' + id, body).pipe(map(res => { return res }))
  }
  getReports(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/reports')
  }
  addPhysician(physican:UserDetails): Observable<any> {
    const headers = { 'Content-Type': 'application/json'}  
    const body=JSON.stringify(physican);
    console.log(body)
    return this.http.post('/data/physicians', body,{'headers':headers});
  }

  updateReport(id: any, body: any) {
    return this.http.put<any>('http://localhost:3000/reports' + '/' + id, body);
  }

  getAppointmentData(){
    return this.http.get<any>('http://localhost:3000/appointments');
  }

  getProcedureCodesData(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/proCodes')
  }
  
  getDaignosisCodesData(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/diagCodes')
  }
  
  getMedicinesData(): Observable<any[]> {
    return this.http.get<any[]>('/data/medicines')
  }

getAllergiesData(): Observable<any[]> {
  return this.http.get<any[]>('/data/allergies')
}

updateMedications(id: any, body: any) {
  return this.http.put<any>('users/currentMedications' + '/' + id, body);
}
updateAllergies(id: any, body: any) {
  return this.http.put<any>('users/allergies' + '/' + id, body);
}
updateimmunization(id: any, body: any) {
  return this.http.put<any>('users/immunization' + '/' + id, body);
}
getTickets(): Observable<any[]> {
  return this.http.get<any[]>('http://localhost:3000/tickets')
}
logTicket(ticketData:any){
    
  const headers = { 'Content-Type': 'application/json' }
  const body = JSON.stringify(ticketData);
  // console.log(body)
  return this.http.post('http://localhost:3000/tickets', body, { 'headers': headers })
  
}
updateTicketStatus(id: any, body: any) {
  return this.http.put<any>('http://localhost:3000/tickets' + '/' + id, body);
}
  
}


