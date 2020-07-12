## Inspiration

Diagrams are an essential part of the Software development process, helping to communicate complex ideas visually.

However, it is not possible to create diagrams directly in Jira. This means you need to integrate third-party solutions, and you end up wasting time from changing between different software.

So, what if you quickly and easily create diagrams directly in your Jira Issue?

Well, that's what Diagrammer is for.

## What it does

It allows you to create diagrams in your Jira Issue using a simple, yet powerful markup language, transforming raw text into beautiful diagrams.

Seven different types of diagrams and charts are available:

- Sequence Diagram
- Class Diagram
- State Diagram
- Entity Relationship Diagram
- Flow Chart
- Gantt Chart
- User Journey

### Sequence Diagram

```
sequenceDiagram
	Alice->>+John: Hello John, how are you?
	Alice->>+John: John, can you hear me?
	John-->>-Alice: Hi Alice, I can hear you!
	John-->>-Alice: I feel great!

```

Renders this:

![](https://mermaid.ink/img/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG5cdEFsaWNlLT4-K0pvaG46IEhlbGxvIEpvaG4sIGhvdyBhcmUgeW91P1xuXHRBbGljZS0-PitKb2huOiBKb2huLCBjYW4geW91IGhlYXIgbWU_XG5cdEpvaG4tLT4-LUFsaWNlOiBIaSBBbGljZSwgSSBjYW4gaGVhciB5b3UhXG5cdEpvaG4tLT4-LUFsaWNlOiBJIGZlZWwgZ3JlYXQhXG5cdFx0XHRcdFx0IiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)

### Class Diagram

```
classDiagram
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
	}

```

Renders this:

![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5cdEFuaW1hbCA8fC0tIER1Y2tcblx0QW5pbWFsIDx8LS0gRmlzaFxuXHRBbmltYWwgPHwtLSBaZWJyYVxuXHRBbmltYWwgOiAraW50IGFnZVxuXHRBbmltYWwgOiArU3RyaW5nIGdlbmRlclxuXHRBbmltYWw6ICtpc01hbW1hbCgpXG5cdEFuaW1hbDogK21hdGUoKVxuXHRjbGFzcyBEdWNre1xuXHRcdCtTdHJpbmcgYmVha0NvbG9yXG5cdFx0K3N3aW0oKVxuXHRcdCtxdWFjaygpXG5cdH1cblx0Y2xhc3MgRmlzaHtcblx0XHQtaW50IHNpemVJbkZlZXRcblx0XHQtY2FuRWF0KClcblx0fVxuXHRjbGFzcyBaZWJyYXtcblx0XHQrYm9vbCBpc193aWxkXG5cdFx0K3J1bigpXG5cdH1cblx0XHRcdFx0XHQiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)

### State Diagram

```
stateDiagram
	[*] --> Still
	Still --> [*]

	Still --> Moving
	Moving --> Still
	Moving --> Crash
	Crash --> [*]

```

Renders this:

![](https://mermaid.ink/img/eyJjb2RlIjoic3RhdGVEaWFncmFtXG5cdFsqXSAtLT4gU3RpbGxcblx0U3RpbGwgLS0-IFsqXVxuXG5cdFN0aWxsIC0tPiBNb3Zpbmdcblx0TW92aW5nIC0tPiBTdGlsbFxuXHRNb3ZpbmcgLS0-IENyYXNoXG5cdENyYXNoIC0tPiBbKl1cblx0XHRcdFx0XHQiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)

### Entity Relationship Diagram

```
erDiagram
        CUSTOMER }|..|{ DELIVERY-ADDRESS : has
        CUSTOMER ||--o{ ORDER : places
        CUSTOMER ||--o{ INVOICE : "liable for"
        DELIVERY-ADDRESS ||--o{ ORDER : receives
        INVOICE ||--|{ ORDER : covers
        ORDER ||--|{ ORDER-ITEM : includes
        PRODUCT-CATEGORY ||--|{ PRODUCT : contains
        PRODUCT ||--o{ ORDER-ITEM : "ordered in"

```

Renders this:

![](https://mermaid.ink/img/eyJjb2RlIjoiZXJEaWFncmFtXG4gICAgICAgIENVU1RPTUVSIH18Li58eyBERUxJVkVSWS1BRERSRVNTIDogaGFzXG4gICAgICAgIENVU1RPTUVSIHx8LS1veyBPUkRFUiA6IHBsYWNlc1xuICAgICAgICBDVVNUT01FUiB8fC0tb3sgSU5WT0lDRSA6IFwibGlhYmxlIGZvclwiXG4gICAgICAgIERFTElWRVJZLUFERFJFU1MgfHwtLW97IE9SREVSIDogcmVjZWl2ZXNcbiAgICAgICAgSU5WT0lDRSB8fC0tfHsgT1JERVIgOiBjb3ZlcnNcbiAgICAgICAgT1JERVIgfHwtLXx7IE9SREVSLUlURU0gOiBpbmNsdWRlc1xuICAgICAgICBQUk9EVUNULUNBVEVHT1JZIHx8LS18eyBQUk9EVUNUIDogY29udGFpbnNcbiAgICAgICAgUFJPRFVDVCB8fC0tb3sgT1JERVItSVRFTSA6IFwib3JkZXJlZCBpblwiXG5cdFx0XHRcdFx0IiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)

### Flow Chart

```
graph TD
  A[Christmas] -->|Get money| B(Go shopping)
  B --> C{Let me think}
  C -->|One| D[Laptop]
  C -->|Two| E[iPhone]
  C -->|Three| F[fa:fa-car Car]

```

Renders this:

![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcbiAgQVtDaHJpc3RtYXNdIC0tPnxHZXQgbW9uZXl8IEIoR28gc2hvcHBpbmcpXG4gIEIgLS0-IEN7TGV0IG1lIHRoaW5rfVxuICBDIC0tPnxPbmV8IERbTGFwdG9wXVxuICBDIC0tPnxUd298IEVbaVBob25lXVxuICBDIC0tPnxUaHJlZXwgRltmYTpmYS1jYXIgQ2FyXVxuXHRcdCIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In19)


### Gantt Chart

```
gantt
	title A Gantt Diagram
	dateFormat  YYYY-MM-DD
	section Section
	A task           :a1, 2014-01-01, 30d
	Another task     :after a1  , 20d
	section Another
	Task in sec      :2014-01-12  , 12d
	another task      : 24d


```

Renders this:

![](https://mermaid.ink/img/eyJjb2RlIjoiZ2FudHRcblx0dGl0bGUgQSBHYW50dCBEaWFncmFtXG5cdGRhdGVGb3JtYXQgIFlZWVktTU0tRERcblx0c2VjdGlvbiBTZWN0aW9uXG5cdEEgdGFzayAgICAgICAgICAgOmExLCAyMDE0LTAxLTAxLCAzMGRcblx0QW5vdGhlciB0YXNrICAgICA6YWZ0ZXIgYTEgICwgMjBkXG5cdHNlY3Rpb24gQW5vdGhlclxuXHRUYXNrIGluIHNlYyAgICAgIDoyMDE0LTAxLTEyICAsIDEyZFxuXHRhbm90aGVyIHRhc2sgICAgICA6IDI0ZFxuXHRcdFx0XHRcdCIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)

## How I built it

I have used the amazing MermaidJS library to transform text into diagrams and charts.

## Challenges I ran into

The biggest challenge was finding a way to create beautiful diagrams without being able to use HTML tags directly in Forge. After trying different approaches, the final solution was transforming the diagrams into images.

## Accomplishments that I'm proud of

I'm really proud of the flexibility that it is possible to achieve with my app. It can be easily extended to include more diagrams, more customisations, and yet everything is very simple to use.

## What I learned

It was a great experience to learn how to use Forge and other Atlassian products. The ecosystem is amazing and allows you to create amazing products by leveraging Atlassian solutions.

## What's next for Prototyper

- Add more diagrams
- Allow to customise themes