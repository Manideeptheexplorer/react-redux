function ToDoItem2(){
  let todo='go to college..!!'
  let date='19-07-2024'
return <div class='conntainer'>
  <div class="row md-row">
  <div class="col-6">
  {todo}
  </div>
  <div class="col-4">
    {date}
  </div>
  <div class="col-2"><button type="button" class="btn btn-danger md-button">Delete</button></div>
</div>
</div>
}
export default ToDoItem2