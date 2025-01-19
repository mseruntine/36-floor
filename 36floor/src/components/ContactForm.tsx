import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Box, Flex, Text, Image } from "@chakra-ui/react"

// Define the expected structure of form data
interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  
  const onSubmit = async (data: IFormInput) => {
    const response = await fetch('https://formspree.io/f/mzzzljpk', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Your message has been sent!');
    } else {
      alert('There was an error. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <Box paddingBottom={100}>
      <Flex textAlign="center" >
              <Flex h={40} w={"100%"} direction="column" alignItems="center" justifyContent="space-evenly">
                <Text color="black" fontWeight={"bold"} textStyle={"2xl"} >Contact us</Text>
              </Flex>
          </Flex>
      <Flex paddingTop={0}>
        
        <div style={{ marginBottom: '1rem' }}>
          <Flex alignItems={"center"}>
            <input
              {...register('name', { required: 'Name is required' })}
              id="name"
              type="text"
              placeholder='name'
              style={{
                width: '100%',
                padding: '8px',
                marginTop: '4px',
                border: '2px solid #ccc',   // Default border before focus
                borderRadius: '4px',         // Rounded corners for aesthetics
                transition: 'border-color 0.3s', // Smooth transition effect when border color changes
              }}
            />
          </Flex>
          {errors.name && <p style={{ color: 'red', fontSize: '0.875rem' }}>{errors.name.message}</p>}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <Flex alignItems={"center"}>
          <input
            {...register('email', { required: 'Email is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email address' } })}
            id="email"
            type="email"
            placeholder='email'
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '4px',
              border: '2px solid #ccc',   // Default border before focus
              borderRadius: '4px',         // Rounded corners for aesthetics
              transition: 'border-color 0.3s', // Smooth transition effect when border color changes
            }}
          />
          </Flex>
          {errors.email && <p style={{ color: 'red', fontSize: '0.875rem' }}>{errors.email.message}</p>}
        </div>
      </Flex>

      <div style={{ marginBottom: '1rem' }}>
        <textarea
          {...register('message', { required: 'Message is required' })}
          id="message"
          placeholder='message'
          style={{
            width: '100%',
            padding: '8px',
            marginTop: '4px',
            border: '2px solid #ccc',   // Default border before focus
            borderRadius: '4px',         // Rounded corners for aesthetics
            transition: 'border-color 0.3s', // Smooth transition effect when border color changes
          }}
        />
        {errors.message && <p style={{ color: 'red', fontSize: '0.875rem' }}>{errors.message.message}</p>}
      </div>
      <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'black', color: 'white', border: 'none', cursor: 'pointer' }}>
        Submit
      </button>
      </Box>
    </form>
  );
};

export default ContactForm;