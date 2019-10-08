<template>
  <div class="container">
    <div class="row">
      <form role="form">
        <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-12">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
        </div>
        <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-12">
            <label for="exampleInputEmail1">Name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter Name">
        </div>
        <div class="clearfix"></div>
        <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-12">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-12">
            <label for="exampleInputPassword1">Confirm Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password">
        </div>
        <div class="clearfix"></div>
        <div class="form-group col-xs-10 col-sm-10 col-md-4 col-lg-12">
          <label for="exampleInputFile">File input</label>
          <input type="file" id="exampleInputFile">
        </div>
        <div class="clearfix"></div>
        <div class="col-xs-10 col-sm-4 col-md-4 col-lg-12">
            <button type="submit" class="btn btn-default">Submit</button>
        </div>
      </form>
    <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
  module.exports = require("./Settings.js");
</script>


<style src="./Settings.css">
</style>


