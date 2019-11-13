import React from 'react'
import useForm from 'react-hook-form'

import "./App.css"

function Form() {
  const { register, handleSubmit} = useForm()

  const url = "https://post-a-form.herokuapp.com/api/movies/";

  const onSubmit = data => { 
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(url, config)
    .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Film ${res.name} ajouté!`);
        }
      }).catch(e => {
        console.error(e);
        alert('Erreur lors de l\'ajout du film');
      });
   }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Title</label>
      <input name="title" ref={register} />

      <label htmlFor="poster">Poster</label>
      <input name="poster" ref={register} />  

      <label htmlFor="comment">Comment</label> 
      <input type="textarea" name="comment" ref={register} />

      <input type="submit" />
    </form>
  )
}

export default Form