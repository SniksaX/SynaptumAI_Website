
export async function GetSession() {
    const server_link = `https://mikianeli.com:4444/api/createSession`;
    console.log(server_link);

    try {
        const response = await fetch(server_link, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return {
            status: response.status,
            data,
        };
    } catch (error) {
        console.error('Error in GetSession:', error);
        return {
            status: 500,
            data: null,
        };
    }
}

export async function SendMessage(message: string) {
    try {
        const response = await fetch(`https://mikianeli.com:4444/api//Gimini`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({ text: message }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error in SendMessage:', error);
    }
}