const heritageSites = [
    {
      id: "tajmahal",
      name: "Taj Mahal",
      location: "Agra, India",
      coordinates: { lat: 27.1751, lng: 78.0421 },
      description:
        "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna, commissioned by Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal.",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
      facts: [
        "Built between 1632 and 1653",
        "Combines elements from Islamic, Persian, Ottoman Turkish and Indian architectural styles",
        "UNESCO World Heritage Site since 1983",
      ],
    },
    {
      id: "machupicchu",
      name: "Machu Picchu",
      location: "Cusco Region, Peru",
      coordinates: { lat: -13.1631, lng: -72.5450 },
      description:
        "Machu Picchu is a 15th-century Inca citadel situated on a mountain ridge, renowned for its sophisticated dry-stone construction and panoramic views.",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg",
      facts: [
        "Discovered by Hiram Bingham in 1911",
        "Built as an estate for Inca emperor Pachacuti",
        "Often referred to as 'The Lost City of the Incas'",
      ],
    },
    {
      id: "qutubminar",
      name: "Qutub Minar",
      location: "Delhi, India",
      coordinates: { lat: 28.5245, lng: 77.1855 },
      description: "Qutub Minar is a soaring, 73-meter tall tower of victory, built in 1193 by Qutb-ud-din Aibak.",
      image: "https://media.istockphoto.com/id/1160975059/photo/qutub-minar-and-its-monuments-delhi.jpg?s=1024x1024&w=is&k=20&c=BhuKUL1LK5tdBzLU9j3D_p5YbDmDgnZN6j1XY9WZcx4=",
      facts: [
        "Built in 1193 by Qutb-ud-din Aibak",
        "73 meters tall with 379 steps",
        "Made of red sandstone and marble",
      ],
    },
    {
      id: "hampi",
      name: "Hampi",
      location: "Karnataka, India",
      coordinates: { lat: 15.3350, lng: 76.4600 },
      description: "Hampi is recognized for its ruins belonging to the Vijayanagara Empire, a UNESCO World Heritage Site.",
      image: "https://karnatakatourism.org/wp-content/uploads/2020/05/Hampi.jpg",
      facts: [
        "Capital of the Vijayanagara Empire in the 14th century",
        "Home to Virupaksha Temple and other notable ruins",
        "UNESCO World Heritage Site since 1986",
      ],
    },
    {
      id: "redfort",
      name: "Red Fort",
      location: "Delhi, India",
      coordinates: { lat: 28.6562, lng: 77.2410 },
      description: "The Red Fort served as the main residence of the Mughal Emperors for nearly 200 years.",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noxagIESOIaM34v5nx4z9TxfbITrV4_BpZU9L9CIM0dkGx_C9wd_hTFz9d_TH1A0Jl9BCs02IHncSByEn0S_bP9akQu9uW9QxxA6bANteK-YYudikb3olTKnMBstab3IP8PH1A=s680-w680-h510-rw",
      facts: [
        "Commissioned by Emperor Shah Jahan in 1638",
        "Built using red sandstone",
        "Site of India's Independence Day celebrations",
      ],
    },
    {
      id: "greatwall",
      name: "Great Wall of China",
      location: "Northern China",
      coordinates: { lat: 40.4319, lng: 116.5704 },
      description:
        "A series of fortifications made of stone, brick, tamped earth, wood, and other materials, built along the northern borders to protect the Chinese states and empires.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1024px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg",
      facts: [
        "Stretching over 13,000 miles",
        "Built from the 7th century BC through the 16th century",
        "UNESCO World Heritage Site since 1987",
      ],
    },
  ];

  let visitedSites = [];

  // User profile data
  let userProfile = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    bio: "Culture Enthusiast & Traveler",
    location: "New York, USA",
    interests: ["History", "Architecture", "Photography"],
    avatar: "https://i.pravatar.cc/150?img=5",
    socialMedia: {
      twitter: "",
      instagram: "",
      facebook: ""
    },
    preferences: {
      notifications: true,
      newsletter: true,
      publicProfile: true
    }
  };

  const app = document.getElementById("app");

  function navigate(section) {
    switch (section) {
      case "home": showHome(); break;
      case "explore": showExplore(); break;
      case "profile": showProfile(); break;
      default: showHome();
    }
  }

  function showHome() {
    app.innerHTML = `
      <section class="hero" role="img" aria-label="Taj Mahal scenic view">
        <div class="hero-content">
          <h2>Discover the World’s Cultural Heritage</h2>
          <p>Explore breathtaking historical sites, learn their stories, and experience the culture.</p>
          <button class="btn btn-primary" onclick="navigate('explore')">Start Exploring</button>
        </div>
      </section>
      <section class="featured-section" aria-label="Featured Heritage Sites">
        <h3>Featured Sites</h3>
        <div class="cards-grid">
          ${heritageSites.slice(0, 3).map(site => `
            <article class="card" tabindex="0" onclick="showDetails('${site.id}')">
              <img src="${site.image}" alt="${site.name}" />
              <div class="card-content"><h3>${site.name}</h3><p>${site.location}</p></div>
            </article>`).join("")}
        </div>
      </section>
      <section class="map-section" aria-label="Heritage Sites Map">
        <h3>Explore Heritage Sites on the Map</h3>
        <div id="heritage-map" class="map-container"></div>
      </section>
    `;

    // Initialize the map after the DOM has been updated
    setTimeout(initMap, 100);
  }

  function showExplore() {
    app.innerHTML = `
      <section class="explore-section" aria-label="Explore Heritage Sites">
        <h2>Explore Heritage Sites</h2>
        <div class="cards-grid">
          ${heritageSites.map(site => `
            <article class="card" tabindex="0" onclick="showDetails('${site.id}')">
              <img src="${site.image}" alt="${site.name}" />
              <div class="card-content"><h3>${site.name}</h3><p>${site.location}</p></div>
            </article>`).join("")}
        </div>
      </section>
    `;
  }

  function showDetails(siteId) {
    const site = heritageSites.find(s => s.id === siteId);
    if (!site) return app.innerHTML = `<p>Site not found.</p>`;
    app.innerHTML = `
      <section class="details-section">
        <h2>${site.name}</h2>
        <img src="${site.image}" alt="${site.name}" />
        <p>${site.description}</p>
        <h3>Interesting Facts</h3>
        <ul>${site.facts.map(f => `<li>${f}</li>`).join("")}</ul>
        <div class="button-group">
          <button class="button-primary" onclick="navigate('explore')">Back to Explore</button>
          <button class="button-secondary" onclick="showFeedbackForm('${site.id}')">Leave Feedback</button>
          <button class="button-outline" onclick="markAsVisited('${site.id}')">Mark as Visited</button>
        </div>
      </section>
    `;
  }

  function markAsVisited(siteId) {
    if (!visitedSites.includes(siteId)) {
      visitedSites.push(siteId);
      alert("Marked as visited!");
    } else {
      alert("You already visited this site.");
    }
  }

  function showFeedbackForm(siteId) {
    const site = heritageSites.find(s => s.id === siteId);
    if (!site) return app.innerHTML = `<p>Site not found.</p>`;

    const today = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format

    app.innerHTML = `
      <section class="feedback-section">
        <h2>Leave Feedback for ${site.name}</h2>
        <p class="feedback-intro">We value your opinion! Please share your experience visiting ${site.name}.</p>

        <form id="feedback-form" class="feedback-form" onsubmit="submitFeedback(event, '${site.id}')">
          <div class="form-group">
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required>
          </div>

          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required>
            <small>We'll never share your email with anyone else.</small>
          </div>

          <div class="form-group">
            <label for="visit-date">Date of Visit</label>
            <input type="date" id="visit-date" name="visit-date" max="${today}" required>
          </div>

          <div class="form-group">
            <label>Overall Experience</label>
            <div class="rating-container">
              <div class="rating">
                <input type="radio" id="star5" name="rating" value="5" required>
                <label for="star5" title="5 stars">★</label>
                <input type="radio" id="star4" name="rating" value="4">
                <label for="star4" title="4 stars">★</label>
                <input type="radio" id="star3" name="rating" value="3">
                <label for="star3" title="3 stars">★</label>
                <input type="radio" id="star2" name="rating" value="2">
                <label for="star2" title="2 stars">★</label>
                <input type="radio" id="star1" name="rating" value="1">
                <label for="star1" title="1 star">★</label>
              </div>
              <span class="rating-text">Select your rating</span>
            </div>
          </div>

          <div class="form-group">
            <label for="feedback-text">Your Feedback</label>
            <textarea id="feedback-text" name="feedback-text" placeholder="Please share your experience, what you enjoyed, and any suggestions for improvement..." required></textarea>
          </div>

          <div class="form-group">
            <label for="recommend">Would you recommend this site to others?</label>
            <select id="recommend" name="recommend" required>
              <option value="" disabled selected>Select an option</option>
              <option value="yes">Yes, definitely</option>
              <option value="maybe">Maybe</option>
              <option value="no">No</option>
            </select>
          </div>

          <div class="form-group checkbox-group">
            <input type="checkbox" id="subscribe" name="subscribe">
            <label for="subscribe">Subscribe to our newsletter for travel tips and updates</label>
          </div>

          <div class="form-actions">
            <button type="button" class="button-outline" onclick="showDetails('${site.id}')">Cancel</button>
            <button type="submit" class="button-primary">Submit Feedback</button>
          </div>
        </form>
      </section>
    `;

    // Add event listeners for the rating stars
    document.querySelectorAll('.rating input').forEach(input => {
      input.addEventListener('change', function() {
        const ratingValue = this.value;
        document.querySelector('.rating-text').textContent = ratingValue + " star" + (ratingValue > 1 ? "s" : "");
      });
    });
  }

  function submitFeedback(event, siteId) {
    event.preventDefault();

    // Get form values
    const form = document.getElementById("feedback-form");
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const visitDate = form.querySelector('#visit-date').value;
    const rating = form.querySelector('input[name="rating"]:checked')?.value;
    const feedback = form.querySelector('#feedback-text').value.trim();
    const recommend = form.querySelector('#recommend').value;

    // Validate form
    if (!name || !email || !visitDate || !rating || !feedback || !recommend) {
      showNotification('Please fill in all required fields.', 'error');
      return;
    }

    // In a real application, you would send this data to a server
    console.log({
      siteId,
      name,
      email,
      visitDate,
      rating,
      feedback,
      recommend,
      subscribe: form.querySelector('#subscribe').checked
    });

    // Show success message
    showNotification('Thank you for your feedback! We appreciate your input.', 'success');

    // Redirect back to details page after a short delay
    setTimeout(() => {
      showDetails(siteId);
    }, 2000);
  }

  function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <span>${message}</span>
        <button class="notification-close">&times;</button>
      </div>
    `;

    // Add to document
    document.body.appendChild(notification);

    // Add event listener to close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
      notification.classList.add('notification-hiding');
      setTimeout(() => notification.remove(), 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
      if (document.body.contains(notification)) {
        notification.classList.add('notification-hiding');
        setTimeout(() => notification.remove(), 300);
      }
    }, 5000);

    // Animate in
    setTimeout(() => notification.classList.add('notification-visible'), 10);
  }

  function showProfile() {
    const visited = heritageSites.filter(site => visitedSites.includes(site.id));

    // Format interests as a comma-separated list
    const interestsDisplay = userProfile.interests.join(', ');

    app.innerHTML = `
      <section class="profile-section">
        <div class="profile-header">
          <img class="profile-avatar" src="${userProfile.avatar}" alt="${userProfile.name}'s Avatar" />
          <div class="profile-info">
            <h2>${userProfile.name}</h2>
            <p class="profile-bio">${userProfile.bio}</p>
            <p class="profile-location"><i class="location-icon">📍</i> ${userProfile.location}</p>
            <div class="profile-interests">
              <h4>Interests</h4>
              <p>${interestsDisplay}</p>
            </div>
            <button class="button-primary" onclick="showEditProfile()">Edit Profile</button>
          </div>
        </div>
      </section>
      <section class="visited-section">
        <h3>Visited Places</h3>
        <div class="cards-grid">
          ${visited.length > 0 ? visited.map(site => `
            <article class="card" tabindex="0" onclick="showDetails('${site.id}')">
              <img src="${site.image}" alt="${site.name}" />
              <div class="card-content"><h3>${site.name}</h3><p>${site.location}</p></div>
            </article>`).join("") : "<p class='no-visits'>No places visited yet. Start exploring to add sites to your profile!</p>"}
        </div>
      </section>
    `;
  }

  function showEditProfile() {
    // Create a comma-separated string of interests
    const interestsString = userProfile.interests.join(', ');

    app.innerHTML = `
      <section class="edit-profile-section">
        <h2>Edit Your Profile</h2>
        <p class="edit-profile-intro">Update your personal information and preferences</p>

        <form id="edit-profile-form" class="edit-profile-form" onsubmit="saveProfile(event)">
          <div class="form-columns">
            <div class="form-column">
              <div class="form-group">
                <label for="profile-name">Full Name</label>
                <input type="text" id="profile-name" name="name" value="${userProfile.name}" required>
              </div>

              <div class="form-group">
                <label for="profile-email">Email Address</label>
                <input type="email" id="profile-email" name="email" value="${userProfile.email}" required>
              </div>

              <div class="form-group">
                <label for="profile-location">Location</label>
                <input type="text" id="profile-location" name="location" value="${userProfile.location}">
              </div>

              <div class="form-group">
                <label for="profile-bio">Bio</label>
                <textarea id="profile-bio" name="bio" rows="3">${userProfile.bio}</textarea>
              </div>

              <div class="form-group">
                <label for="profile-interests">Interests (comma separated)</label>
                <input type="text" id="profile-interests" name="interests" value="${interestsString}">
              </div>
            </div>

            <div class="form-column">
              <div class="form-group">
                <label for="profile-avatar">Profile Picture URL</label>
                <input type="url" id="profile-avatar" name="avatar" value="${userProfile.avatar}">
                <div class="avatar-preview">
                  <img src="${userProfile.avatar}" alt="Avatar Preview" id="avatar-preview-img">
                </div>
              </div>

              <div class="form-group">
                <label>Social Media</label>
                <div class="social-media-inputs">
                  <div class="social-input">
                    <span class="social-icon">Twitter</span>
                    <input type="url" id="profile-twitter" name="twitter" value="${userProfile.socialMedia.twitter}" placeholder="Twitter URL">
                  </div>
                  <div class="social-input">
                    <span class="social-icon">Instagram</span>
                    <input type="url" id="profile-instagram" name="instagram" value="${userProfile.socialMedia.instagram}" placeholder="Instagram URL">
                  </div>
                  <div class="social-input">
                    <span class="social-icon">Facebook</span>
                    <input type="url" id="profile-facebook" name="facebook" value="${userProfile.socialMedia.facebook}" placeholder="Facebook URL">
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label>Preferences</label>
                <div class="preferences-group">
                  <div class="checkbox-group">
                    <input type="checkbox" id="profile-notifications" name="notifications" ${userProfile.preferences.notifications ? 'checked' : ''}>
                    <label for="profile-notifications">Receive email notifications</label>
                  </div>
                  <div class="checkbox-group">
                    <input type="checkbox" id="profile-newsletter" name="newsletter" ${userProfile.preferences.newsletter ? 'checked' : ''}>
                    <label for="profile-newsletter">Subscribe to newsletter</label>
                  </div>
                  <div class="checkbox-group">
                    <input type="checkbox" id="profile-public" name="publicProfile" ${userProfile.preferences.publicProfile ? 'checked' : ''}>
                    <label for="profile-public">Make profile public</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="form-actions">
            <button type="button" class="button-outline" onclick="showProfile()">Cancel</button>
            <button type="submit" class="button-primary">Save Changes</button>
          </div>
        </form>
      </section>
    `;

    // Add event listener for avatar preview
    document.getElementById('profile-avatar').addEventListener('input', function() {
      document.getElementById('avatar-preview-img').src = this.value;
    });
  }

  function saveProfile(event) {
    event.preventDefault();

    const form = document.getElementById('edit-profile-form');

    // Update user profile with form values
    userProfile.name = form.querySelector('#profile-name').value.trim();
    userProfile.email = form.querySelector('#profile-email').value.trim();
    userProfile.bio = form.querySelector('#profile-bio').value.trim();
    userProfile.location = form.querySelector('#profile-location').value.trim();
    userProfile.avatar = form.querySelector('#profile-avatar').value.trim();

    // Parse interests from comma-separated string to array
    const interestsString = form.querySelector('#profile-interests').value.trim();
    userProfile.interests = interestsString.split(',').map(interest => interest.trim()).filter(interest => interest);

    // Update social media
    userProfile.socialMedia.twitter = form.querySelector('#profile-twitter').value.trim();
    userProfile.socialMedia.instagram = form.querySelector('#profile-instagram').value.trim();
    userProfile.socialMedia.facebook = form.querySelector('#profile-facebook').value.trim();

    // Update preferences
    userProfile.preferences.notifications = form.querySelector('#profile-notifications').checked;
    userProfile.preferences.newsletter = form.querySelector('#profile-newsletter').checked;
    userProfile.preferences.publicProfile = form.querySelector('#profile-public').checked;

    // Show success notification
    showNotification('Profile updated successfully!', 'success');

    // Return to profile view
    setTimeout(() => {
      showProfile();
    }, 1000);
  }

  // Accessibility helper
  const style = document.createElement("style");
  style.textContent = `.visually-hidden { position: absolute !important; height: 1px; width: 1px; overflow: hidden; clip: rect(1px, 1px, 1px, 1px); white-space: nowrap; }`;
  document.head.appendChild(style);

  // Google Maps initialization
  let map;
  let markers = [];
  let infoWindow;

  function initMap() {
    const mapElement = document.getElementById('heritage-map');
    if (!mapElement) return;

    // Create a new map centered on a default location (world view)
    map = new google.maps.Map(mapElement, {
      center: { lat: 20, lng: 0 },
      zoom: 2,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      mapTypeControl: true,
      fullscreenControl: true,
      streetViewControl: false,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
      }
    });

    // Create a single info window to be used for all markers
    infoWindow = new google.maps.InfoWindow();

    // Add markers for each heritage site
    heritageSites.forEach(site => {
      addMarker(site);
    });

    // Fit the map to show all markers
    if (markers.length > 0) {
      const bounds = new google.maps.LatLngBounds();
      markers.forEach(marker => bounds.extend(marker.getPosition()));
      map.fitBounds(bounds);
    }
  }

  function addMarker(site) {
    if (!site.coordinates) return;

    const marker = new google.maps.Marker({
      position: site.coordinates,
      map: map,
      title: site.name,
      animation: google.maps.Animation.DROP,
      icon: {
        url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
      }
    });

    markers.push(marker);

    // Create info window content
    const contentString = `
      <div class="map-info-window">
        <h3>${site.name}</h3>
        <p>${site.location}</p>
        <img src="${site.image}" alt="${site.name}" style="width:150px;height:100px;object-fit:cover;margin:8px 0;">
        <p>${site.description.substring(0, 100)}...</p>
        <button onclick="showDetails('${site.id}')" style="background-color:#1e40af;color:white;border:none;padding:5px 10px;border-radius:4px;cursor:pointer;">View Details</button>
      </div>
    `;

    // Add click event to show info window
    marker.addListener('click', () => {
      infoWindow.setContent(contentString);
      infoWindow.open(map, marker);
    });

    // Add hover animation
    marker.addListener('mouseover', () => {
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(() => { marker.setAnimation(null); }, 750);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    navigate("home");
  });
