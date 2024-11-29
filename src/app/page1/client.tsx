'use client'

import React from 'react';

export default function PageUsersMap() {
  try {
    return (
      <>
        <div>
          Page 1: {(new Date()).toString()}
        </div>
      </>
    );
  } catch (error) {
    console.log('erro', error);
  }
}