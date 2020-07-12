const flowChart = `graph TD
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]`

const sequenceDiagram = `sequenceDiagram
	User->>+API: /signup
	API->>UserService: signup()
	UserService->>DB: INSERT User
	DB-->>UserService: success
	UserService-->>API: success
	API-->>-User: {status:200, success:true}`

const classDiagram = `classDiagram
	Animal <|-- Duck
	Animal <|-- Fish
	Animal <|-- Zebra
	Animal : +int age
	Animal : +String gender
	Animal: +isMammal()
	Animal: +mate()
	class Duck{
		+String beakColor
		+swim()
		+quack()
	}
	class Fish{
		-int sizeInFeet
		-canEat()
	}
	class Zebra{
		+bool is_wild
		+run()
	}`

const stateDiagram = `stateDiagram
	[*] --> Still
	Still --> [*]

	Still --> Moving
	Moving --> Still
	Moving --> Crash
	Crash --> [*]`

const ganttChart = `gantt
	title A Gantt Diagram
	dateFormat  YYYY-MM-DD
	section Section
	A task           :a1, 2020-01-01, 30d
	Another task     :after a1  , 20d
	section Another
	Task in sec      :2020-01-12  , 12d
	My task      : 24d`

const pieChart = `pie title Pets adopted by volunteers
	"Dogs" : 386
	"Cats" : 85
	"Rats" : 15`

const userJourney = `journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 5: Me`

const erChart = `erDiagram
    CUSTOMER }|..|{ DELIVERY-ADDRESS : has
    CUSTOMER ||--o{ ORDER : places
    CUSTOMER ||--o{ INVOICE : "liable for"
    DELIVERY-ADDRESS ||--o{ ORDER : receives
    INVOICE ||--|{ ORDER : covers
    ORDER ||--|{ ORDER-ITEM : includes
    PRODUCT-CATEGORY ||--|{ PRODUCT : contains
    PRODUCT ||--o{ ORDER-ITEM : "ordered in"`


const templates = {
	'flowchart' : {
		name: 'Flow Chart',
		design: flowChart
	},
	'sequence' : {
		name: 'Sequence Diagram',
		design: sequenceDiagram
	},
	'classDiagram' : {
		name: 'Class Diagram',
		design: classDiagram
	},
	'state' : {
		name: 'State Diagram',
		design: stateDiagram
	},
	'gantt' : {
		name: 'Gantt Chart',
		design: ganttChart
	},
	'er' : {
		name: 'ER diagram',
		design: erChart
	},
	'userJourney' : {
		name: 'User Journey',
		design: userJourney
	},
}


const Templates = {
	getById: (id) => templates[id].design,
	getAll: () => {
		let templatesList = []
		for (let key in templates) {
			templatesList.push({
				id: key,
				name: templates[key].name
			})
		}

		templatesList.unshift({'id': 'own', 'name': 'Empty', selected: true})

		return templatesList
	}
}

export default Templates