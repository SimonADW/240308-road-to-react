import * as React from 'react';

const App = ()=> {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
    {
      title: 'Vue.js',
      url: 'https://vuejs.org/',
      author: 'Evan You',
      num_comments: 4,
      points: 5,
      objectID: 2,
    },
    {
      title: 'Angular',
      url: 'https://angular.io/',
      author: 'Google',
      num_comments: 5,
      points: 4,
      objectID: 3,
    },
    {
      title: 'Svelte',
      url: 'https://svelte.dev/',
      author: 'Rich Harris',
      num_comments: 2,
      points: 3,
      objectID: 4,
    },
    {
      title: 'Ember.js',
      url: 'https://emberjs.com/',
      author: 'Yehuda Katz, Tom Dale',
      num_comments: 3,
      points: 4,
      objectID: 5,
    },
    {
      title: 'Backbone.js',
      url: 'https://backbonejs.org/',
      author: 'Jeremy Ashkenas',
      num_comments: 1,
      points: 2,
      objectID: 6,
    },
    {
      title: 'Meteor',
      url: 'https://www.meteor.com/',
      author: 'Meteor Development Group',
      num_comments: 3,
      points: 3,
      objectID: 7,
    },
    {
      title: 'Django',
      url: 'https://www.djangoproject.com/',
      author: 'Django Software Foundation',
      num_comments: 6,
      points: 5,
      objectID: 8,
    },
    {
      title: 'Flask',
      url: 'https://flask.palletsprojects.com/',
      author: 'Pallets Projects',
      num_comments: 4,
    }
  ];

  const [searchTerm, setSearchTerm] = React.useState('React');

  const handleSearch = (event)=> {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) => 
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search onSearch={handleSearch} search={searchTerm} />

      <hr />

      <List list={searchedStories} />
    </div>
  );
};

const Search = (props)=> {
 return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={props.onSearch} value={props.search} />
      <p>Searching for <strong>{props.searchTerm}</strong></p>
    </div>
 );
};


const List = (props)=> {
  return (
    <ul>
      {props.list.map(book => {
        return (
          <Item key={book.objectID} currentBook={book} />
          )      
        })
      }      
    </ul>
  );
};


const Item = (props)=> {
  return (
    <li>
      <span>
        <a href={props.currentBook.url}>Pre-order {props.currentBook.title} </a>
      </span>
      <span>{props.currentBook.title}</span>
      <span>{props.currentBook.author}</span>
      <span>{props.currentBook.num_comments}</span>
      <span>{props.currentBook.points}</span>
      <br />
    </li>
  )
}


export default App;