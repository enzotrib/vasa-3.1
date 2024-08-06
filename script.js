document.addEventListener('DOMContentLoaded', function() {
    const avatars = [
      { id: 1, name: 'Kate', description: 'Created 20 Aug 2023', imageUrl: '/path-to-kate-image.jpg' },
      { id: 2, name: 'Claudia', description: 'Created 12 Jun 2022', imageUrl: '/path-to-claudia-image.jpg' },
      { id: 3, name: 'Kartik', description: 'Japanese Model', imageUrl: '/path-to-kartik-image.jpg' },
      { id: 4, name: 'Jenny', description: 'Canadian Actress', imageUrl: '/path-to-jenny-image.jpg' },
      { id: 5, name: 'Olivia', description: 'Polish Actress', imageUrl: '/path-to-olivia-image.jpg' },
      { id: 6, name: 'Jason', description: 'English Voice Actor', imageUrl: '/path-to-jason-image.jpg' },
      { id: 7, name: 'Carl', description: 'Australian Model', imageUrl: '/path-to-carl-image.jpg' },
    ];
  
    const grid = document.querySelector('.grid');
  
    avatars.forEach(avatar => {
      const card = document.createElement('div');
      card.className = 'card';
  
      const img = document.createElement('img');
      img.src = avatar.imageUrl;
      img.alt = avatar.name;
  
      const name = document.createElement('h3');
      name.textContent = avatar.name;
  
      const description = document.createElement('p');
      description.textContent = avatar.description;
  
      const footer = document.createElement('div');
      footer.className = 'footer';
  
      const date = document.createElement('span');
      date.textContent = avatar.createdAt;
  
      const button = document.createElement('button');
      button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      `;
  
      footer.appendChild(date);
      footer.appendChild(button);
  
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(description);
      card.appendChild(footer);
  
      grid.appendChild(card);
    });
  });
  