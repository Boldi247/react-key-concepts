import keyConceptsImage from './assets/images/key-concepts.png';
import componentsImage from './assets/images/components.png';
import stateImage from './assets/images/state.png';
import eventsImage from './assets/images/events.png';
import Header from './Header';
import Concept from './Concept';

const concepts = [
  {
    title: 'Components',
    image: componentsImage,
    description:
      'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  },
  {
    title: 'State',
    image: stateImage,
    description:
      'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
  },
  {
    title: 'Events',
    image: eventsImage,
    description:
      'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
  },
];

function App() {
  return (
    <div>
      <Header
        image={keyConceptsImage}
        altText={'Medal badge with a star'}
        headerText={'Key React Concepts'}
        descriptionText={'Selected key React concepts you should know about'}
      />
      <ul id="concepts">
        <Concept
          image={concepts[0].image}
          altText={concepts[0].title}
          title={concepts[0].title}
          desc={concepts[0].description}
        />
        <Concept
          image={concepts[1].image}
          altText={concepts[1].title}
          title={concepts[1].title}
          desc={concepts[1].description}
        />
        <Concept
          image={concepts[2].image}
          altText={concepts[2].title}
          title={concepts[2].title}
          desc={concepts[2].description}
        />
      </ul>
    </div>
  );
}

export default App;
