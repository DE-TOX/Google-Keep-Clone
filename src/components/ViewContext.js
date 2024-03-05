import React from 'react';

const ViewModeContext = React.createContext({
 viewMode: 'grid',
 setViewMode: () => {},
});

export default ViewModeContext;