	//定义Person类
	function Person (name,age) {
		this.name=name;
		this.age= age;
	}
	//定义Person方法
	Person.prototype.intro = function(){
		var words = "我叫"+this.name+",今年"+this.age+"岁！";
		console.log(words);
	}
	//Student继承Person属性
	function Student (name,age,id) {
		this.id =id;
		Person.call(this,name,age);
	}
	//继承方法
	Student.prototype= new Person();
	//添加新方法
	Student.prototype.sayId= function () {
		var words = "我的学号是"+this.id+"！";
		console.log(words);
	}
	//创建学生实例
	student = new Student('Bright',22,1245350206);
	student.sayId();
	student.intro();