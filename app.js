document.getElementById('tripForm').onsubmit = async function(e){
  e.preventDefault();
  let destination = document.getElementById('destination').value;
  let startDate = document.getElementById('startDate').value;
  let endDate = document.getElementById('endDate').value;
  let remarks = document.getElementById('remarks').value;
  let itinDiv = document.getElementById('itinerary');
  itinDiv.innerHTML = '<em>Generating itinerary using AI...</em>';
  
  let userPrompt = `Plan a travel itinerary (day-by-day, concise) for a trip to ${destination} from ${startDate} to ${endDate}. Interests/remarks: ${remarks}. Show each day with activities, suggested sights, and meals.`;

  // --- AI Fetch Logic ---
  try {
    let response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_OPENAI_API_KEY', // Insert your OpenAI key
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{role: 'user', content: userPrompt}],
        temperature: 0.7,
        max_tokens: 800
      })
    });
    let data = await response.json();

    if (data.choices && data.choices.length > 0) {
      let aiPlan = data.choices[0].message.content;
      itinDiv.innerHTML = `<h2>AI-Generated Itinerary</h2><pre style="white-space:pre-wrap">${aiPlan}</pre>`;
    } else {
      itinDiv.innerHTML = '<b>Sorry, no AI response received.</b>';
    }
  } catch (err) {
    itinDiv.innerHTML = `<b>Error connecting to AI: ${err.message}</b>`;
  }
};
