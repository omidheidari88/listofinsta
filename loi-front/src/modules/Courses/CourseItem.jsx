<tr>
	<td>{course.title}</td>
	<td>
		if (course.type==='free') { 
		<span className="badge badge-primary">رایگان</span>
		}
		if(course.type==='cash') {
		<span className="badge badge-secondary">نقدی</span>
		}
		if(course.type==='vip') {
		<span className="badge badge-info">اعضای ویژه</span>
		 }
	</td>
	<td>{course.price}</td>
	<td>
		if( {course.images} !=null ||{course.images} !=undefined ){ 
		<img src="{course.images['original']}" style="width: 70px; height: 70px;" alt="" />
	}
	</td>
	<td>{course.descript}</td>
	<td>{course.time}</td>
	<td>{course.tags}</td>
	<td>
		if({admin}>0){
		<a href="admin/edit/{ course.course_id }">
			<i className="material-icons">
				edit
			</i>
		</a>
		<a href="admin">
			<i className="material-icons">
				add
			</i>
		</a>
		<a href="admin/delete/{ course.course_id }">
			<i className="material-icons">
				delete
			</i>
		</a>
}

	</td>
</tr>
