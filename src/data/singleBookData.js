import img from '../pages/img/1.jpg'

export const singleBookData = {
	BookHeader: {
		title: 'About the Book',
		publishDate: 'Jul 26, 2021',
		tags: 'UI / Frontend',
	},
	BookImages: [
		{
			id: 1,
			title: 'Kabul Book Management UI',
			img: img,
		},
	],
	BookInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'Company Ltd',
			},
			{
				id: 2,
				title: 'Services',
				details: 'UI Design & Frontend Development',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://company.com',
			},
			{
				id: 4,
				title: 'Phone',
				details: '555 8888 888',
			},
		],
	},
	RelatedBook: {
		title: 'Related Books',
		Books: [
			{
				id: 1,
				title: 'Mobile UI',
				img: '4',
			},
			{
				id: 2,
				title: 'Web Application',
				img: '5',
			},
			{
				id: 3,
				title: 'UI Design',
				img: '6',
			},
			{
				id: 4,
				title: 'Kabul Mobile App UI',
				img: '3',
			},
		],
	},
};
