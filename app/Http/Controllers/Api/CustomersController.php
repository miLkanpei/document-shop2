<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Customer;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class CustomersController extends Controller{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
      $articles = DB::select("SELECT * FROM customers ORDER BY id LIMIT 10000 OFFSET 0");
      return $articles;
    }

    public function store(Request $request){
      $customer = new Customer;
      $customer-> name = $request->name;
      $customer-> status = $request->status;
      $customer->save();
      return redirect('api/customers');
    }

    public function show($id){
      $customer = Customer::find($id);
      return $customer;
    }

    public function update(Request $request, $id){
      $customer = Customer::find($id);
      $customer->name = $request->name;
      $customer->status = $request->status;
      $customer->save();
      return redirect("api/customers".$id);
    }

    public function destroy($id){
      $customer = Customer::find($id);
      $customer->delete();
      return redirect('api/customers');
    }

}