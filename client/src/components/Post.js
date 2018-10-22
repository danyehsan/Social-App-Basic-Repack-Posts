import React from 'react';

const styles = {
  complete: {
    textDecoration: 'checkmark',
    color: 'green'
  },
  pointer: { cursor: 'pointer' }
}

const Post = ({ id, complete, name, updatePost, deletePost }) => (
  <div className="col s12">
    <div className="col m8">
     <div style={ complete ? styles.complete: {} } className="center">
     {first_name},{ last_name}
     </div>
     </div>
     <div className="col m2">
      <input 
        id={`post-${id}`}
        type="checkbox"
        defaultChecked={complete}
        onClick={() => updatePost(id)}
        />
        <label htmlFor={`post-${id}`}>Post Complete?</label>
        </div>
        <div style={ styles.pointer } className= "col m1" onClick={() => deletePost(id)}>
        X
        </div>
     </div>
)

export default Post