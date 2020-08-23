import React, { Component } from 'react';
const apiInsertRestaurant = 'https://webhook.site/1b9ab592-0225-4285-b1b6-48921942635a';

async function insertRestaurant(params) {
    try {
        let response = await fetch(apiInsertRestaurant, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        });
        let responseJson = await response.json();
        return responseJson.result; 
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}

export {insertRestaurant};