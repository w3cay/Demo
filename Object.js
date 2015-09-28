function Person () {
	Person.prototype.name="Bright";
	Person.prototype.age=22;
	Person.prototype.sayname=function () {
		console.log(this.name);
	};
}
var person1=new Person();
