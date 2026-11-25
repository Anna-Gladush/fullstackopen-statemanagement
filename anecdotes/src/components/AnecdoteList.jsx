import { useAnecdotes, useAnecdotesActions } from "../store"

const AnecdoteList = () => {
  const anecdotes = useAnecdotes()
  const { vote } = useAnecdotesActions()

  const handleVoting = (id) => {
    vote(id)
  }
  return (
    <>
      {anecdotes.toSorted((a, b) => b.votes - a.votes).map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVoting(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default AnecdoteList