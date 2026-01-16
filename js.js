
let rooms = [
    { room: 101, type: 'Single', price: 50, occupied: false, guest: null },
    { room: 102, type: 'Double', price: 80, occupied: false, guest: null },
    { room: 103, type: 'Suite', price: 120, occupied: false, guest: null }
];


const guestNameInput = document.getElementById('guest-name');
const roomTypeSelect = document.getElementById('room-type');
const checkInBtn = document.getElementById('check-in-btn');
const checkOutBtn = document.getElementById('check-out-btn');
const output = document.getElementById('output');

function checkIn() {
    const guestName = guestNameInput.value.trim();
    const roomType = roomTypeSelect.value;

    if (!guestName) {
        output.textContent = 'Please enter guest name';
        return;
    }

    const availableRoom = rooms.find(
        room => room.type === roomType && !room.occupied
    );

    if (!availableRoom) {
        output.textContent = `No available ${roomType} rooms`;
        return;
    }

    availableRoom.occupied = true;
    availableRoom.guest = guestName;

    output.textContent =
        `Check-in successful!
Guest: ${guestName}
Room: ${availableRoom.room}
Price: $${availableRoom.price}/night`;

    guestNameInput.value = '';
}


function checkOut() {
    const guestName = guestNameInput.value.trim();

    if (!guestName) {
        output.textContent = 'Enter guest name to check out';
        return;
    }

    const room = rooms.find(r => r.guest === guestName);

    if (!room) {
        output.textContent = 'Guest not found';
        return;
    }

    room.occupied = false;
    room.guest = null;

    output.textContent = `${guestName} checked out successfully`;
    guestNameInput.value = '';
}


checkInBtn.addEventListener('click', checkIn);
checkOutBtn.addEventListener('click', checkOut);
