import React, { Component, PropTypes } from "react";

export default class About extends Component {
	render() {
		return (
			<div>
				{/*<h1>About</h1>*/}
				<div className="about-info">
					<div className="about-avatar">
						<img
							src="../../build/ava.jpeg"
							className="userpic"
							alt="userpic"
						/>
					</div>
					<p>Привет, меня зовут Олег, я веб-разработчик.</p>
					<p>
						Умею делать небольшие spa на react+redux, с роутингом, авторизацией, валидацией,
						{" "}
						работой с API сторонних сервисов и базой данных, например firebase.
					</p>
					<p>
						Основные навыки: html, scss, javascript, react + redux, webpack, etc...
					</p>
					<p>
						Свободно читаю документацию на английском.
						Способен самостоятельно искать ответы на вопросы и решать возникающие проблемы.
					</p>
					<p>
						Веб-разработкой заинтересовался и начал изучать два года назад.
					</p>
					<ul>
						Прошел платные онлайн курсы на Loftschool.com :
						<li>"Веб-разработка для начинающих" (ноябрь 15)</li>
						<li>
							"Продвинутый курс по веб-разработке" (январь 16),
						</li>
					</ul>

					<ul>
						и Learn.Javascript.ru:
						<li>JavaScript/DOM/интерфейсы (июнь 15)</li>
						<li>Node.JS (январь 16)</li>
						<li>TypeScript (февраль 16)</li>
						<li>ReactJS (март 16)</li>
						<li>"Веб-разработка для начинающих" (ноябрь 15)</li>
					</ul>
					<ul>
						<li>
							+ M101JS: MongoDB for Node.js Developers (апрель16)
						</li>
					</ul>

					<p>
						Знания есть, но нет опыта коммерческой разработки. Хочется применить их на практике.
						{" "}
						Интересно развиваться в сторону fullstack разработчика веб-приложений,
						{" "}
						стек - javascript, node.js.
					</p>

				</div>

			</div>
		);
	}
}
