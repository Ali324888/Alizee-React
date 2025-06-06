const parent = React.createElement('div', {id: 'parent'}, 
    [React.createElement('div', {id: 'child1'}, 
        [React.createElement('h1', {}, 'I am Heading 1'), React.createElement('h2', {}, 'I am Heading 2')]
    ),
    React.createElement('div', {id: 'child2'}, 
        [React.createElement('h1', {}, 'I am Heading 1'), React.createElement('h2', {}, 'I am Heading 2')]
    )]
)

const root = ReactDOM.createRoot(document.getElementById('root'))
        
root.render(parent);