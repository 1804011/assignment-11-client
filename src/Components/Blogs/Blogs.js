import React from "react";
import "./Blogs.css";
const Blogs = () => {
	return (
		<div className="blogs-container w-75 mx-auto w-sm-100 py-4">
			<h4>*Difference between Javascript and Node Js</h4>
			<p>
				- Javascript is a programming language which run on server only.But Node
				js is a run time environment which enables Javascript to run outside
				browser such as server.Javascript uses in frontend web development.But
				Node js used in backend. NodeJs can work with database.Javascript can
				manipulate DOM but node js can't do that.
			</p>
			<h4>*When should we use NodeJs and When should we use Mongodb</h4>
			<p>
				- Node Js is a javascript framework.So when we learn javascript for
				front end then if we go to backend NodeJs is a good chioce because
				NodeJs is easy to learn then.As Javascript is a popular language Nodejs
				has a large developer community.So it is easy to seek for help when we
				got stuck.When we are working with nosql database then nodejs is a good
				choice because nosql is well fitted with javascript object.Moreover, non
				blocking behaviour of javascript eliminates the need for
				multithreading.So we can use Nodejs.
			</p>
			<p>
				- Mongodb is a good choice we our data is document centric and doesn't
				fit well in the schema of relational database such as sql.Whe Our data
				is not structured and complex we can use Mongodb to implement nosql
				database database.Moreover mongodb is supported in major public cloud
				such as AWS,Ajure etc.Mongodb is scalable so we can use it to develop
				large enterprice website.
			</p>
			<h4>*Difference between sql and nosql database</h4>
			<p>
				Sql database is relational table based database whereas nosql database
				is non relational document based database.Sql database has predifined
				schema to query database but nosql has dynamic schema to query data. Sql
				is preferabble when data is structured.but nosql is preferrable when
				data is unstructured and complex.Sql database is vertically scalable
				whereas nosql is horizontally scalable.
			</p>
		</div>
	);
};

export default Blogs;
