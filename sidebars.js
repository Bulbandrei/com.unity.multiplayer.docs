module.exports = 
{
  docs: 
  {
    'Getting Started': 
    [
      'about-mlapi',
      'getting-started/installation', 
      'getting-started/library-initialization', 
      'getting-started/connection-approval',
    ],
    'MLAPI Basics': 
    [    
      {
        'Messaging System': 
        [
          'mlapi-basics/introduction', 
          {
            'RPC Remote Procedure Call':

            [
              'mlapi-basics/clientrpc',
              'mlapi-basics/serverrpc',
              'mlapi-basics/reliability',
              'mlapi-basics/execution-table',
              'mlapi-basics/rpc-params',

              
                {
                'Serialization':
                  [
                  'mlapi-basics/serialization-intro'
                  ],
                },
              
              'mlapi-basics/backward-compatibility',
              'mlapi-basics/cross-compatibility',
              'mlapi-basics/deprecation-of-return-values',
             
            ],  
          },
                   
        ],

      },      

    'mlapi-basics/object-spawning', 
    'mlapi-basics/object-behavior-relation',
    'mlapi-basics/modularity', 
    'mlapi-basics/networkedvar', 
    'mlapi-basics/syncedvar', 
    'mlapi-basics/scene-management',
    'mlapi-basics/object-ownership', 
    'mlapi-basics/object-visibility',
    'mlapi-basics/logging',
    ],

    'Core Components': 
    [
      'core-components/core-components',
      'core-components/networkingmanager', 
      'core-components/trackedobject', 
      'core-components/networkedobject', 
      'core-components/networkedbehavior',
    ],

    'Advanced Topics': 
    [
      'advanced-topics/message-encryption',
      'advanced-topics/object-pooling', 
      'advanced-topics/lag-compensation', 
      'advanced-topics/bitwriter-bitreader-bitstream', 
      'advanced-topics/custom-transports', 
      'advanced-topics/networkprofiler-window', 
      'advanced-topics/custom-serialization', 
      'advanced-topics/boxing-systems',
    ],

    'Troubleshooting': 
    [
      'troubleshooting/troubleshooting',
    ],

  },
};