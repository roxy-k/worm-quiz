import { useState } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack';



function App() {
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
  })

  const [result, setResult] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setAnswers((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { q1, q2, q3 } = answers

    if (q1 === 'Pink' && q2 === 'Spa' && q3 === 'Alone') {
      setResult('💅 You are a Glamorous Earthworm! You love self-care, soft soil, and peaceful solitude.')
    } else if (q1 === 'Brown' && q2 === 'Digging' && q3 === 'Team') {
      setResult('🪖 You are a Battle-Ready Compost Worm! Always on a mission, you thrive in teamwork and dirt.')
    } else if (q1 === 'Beige' && q2 === 'Reading' && q3 === 'With friends') {
      setResult('📚 You are a Dreamy Bookworm! Cozy corners, shelves of books, and deep thoughts are your vibe.')
    } else {
      setResult('🌀 You are a one-of-a-kind worm with a unique personality! And that\'s awesome.')
    }
  }

  const resetQuiz = () => {
    setAnswers({ q1: '', q2: '', q3: '' })
    setResult('')
  }

  const allAnswered = answers.q1 && answers.q2 && answers.q3

  return (
<Container maxWidth="sm" sx={{ mt: 5 }}>
  <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
   <Box 
  sx={{ 
    border: '2px solid #6a1b9a',
    borderRadius: 2,
    padding: 2,
    backgroundColor: '#f3e5f5',
    textAlign: 'center',
    mb: 4
  }}
>
  <Typography variant="h4" component="h1" sx={{ color: '#4a148c' }}>
    🪱 Which Worm Are You?
  </Typography>
</Box>



      <Box display="flex" flexDirection="column" alignItems="center">
        {!result ? (
          <form onSubmit={handleSubmit} className="quiz-form">
            {/* ВОПРОС 1 */}
            <FormControl component="fieldset" sx={{ mb: 4 }}fullWidth>
  <FormLabel component="legend">What is your favorite color?</FormLabel>
  <RadioGroup
    name="q1"
    value={answers.q1}
    onChange={handleChange}
  >
    <FormControlLabel value="Pink" control={<Radio />} label="Pink" />
    <FormControlLabel value="Brown" control={<Radio />} label="Brown" />
    <FormControlLabel value="Beige" control={<Radio />} label="Beige" />
  
  </RadioGroup>
</FormControl>


            {/* ВОПРОС 2 */}
            <FormControl component="fieldset" sx={{ mb: 4 }}fullWidth>
  <FormLabel component="legend">What is your favorite activity?</FormLabel>
  <RadioGroup
    name="q2"
    value={answers.q2}
    onChange={handleChange}
  >
    <FormControlLabel value="Spa" control={<Radio />} label="Spa" />
    <FormControlLabel value="Digging" control={<Radio />} label="Digging" />
    <FormControlLabel value="Reading" control={<Radio />} label="Reading" />
  </RadioGroup>
</FormControl>


            {/* ВОПРОС 3 */}
            <FormControl component="fieldset" sx={{ mb: 4 }}fullWidth>
  <FormLabel component="legend">Do you prefer to be alone or with others?</FormLabel>
  <RadioGroup
    name="q3"
    value={answers.q3}
    onChange={handleChange}
  >
    <FormControlLabel value="Alone" control={<Radio />} label="Alone" />
    <FormControlLabel value="Team" control={<Radio />} label="Team" />
    <FormControlLabel value="With friends" control={<Radio />} label="With friends" />
  </RadioGroup>
</FormControl>


            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={!allAnswered}
              sx={{ mt: 2 }}
            >
              {allAnswered ? 'Find Out My Worm Type! 🔍' : 'Please answer all questions'}
            </Button>
          </form>
        ) : (
          <div className="result-container">
            <Typography variant="h5" gutterBottom>Your Result:</Typography>
            <p>{result}</p>
            <Button onClick={resetQuiz} variant="outlined" sx={{ mt: 2 }}>
              Take Quiz Again 🔄
            </Button>
          </div>
        )}
      </Box>
    </Paper>
</Container>

  )
}

export default App
