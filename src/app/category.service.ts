import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url='http://127.0.0.1:8000/api/categories';
  selectCategory:Category=new Category();

  reqHeader=new HttpHeaders({
    'Content-Type':'aplication/json'
  });

  constructor(private http:HttpClient) { }

  getCategories():Observable<Category>{
    return this.http.get<Category>(this.url);
  }

  createCategory(category:Category):Observable<Category>{
    return this.http.post(this.url,category,{headers:this.reqHeader});
  }

  updateCategory(id:number, category:Category){
    return this.http.put(this.url+'/'+id+'/',category,{headers:this.reqHeader});
  }

  deleteCategory(id:number){
    return this.http.delete(this.url+'/'+id+'/');
  }
}
