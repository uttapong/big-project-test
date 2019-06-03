<?php
namespace App\Middleware;

use Interop\Container\ContainerInterface;
use Exception;

class CacheFactory
{
    public function __invoke(ContainerInterface $container)
    {
        $config = $container->get('config');
        if (isset($config['cache']) && isset($config['cache']['enabled'])) {
            if ($config['cache']['enabled']) {
                if (!isset($config['cache']['path'])) {
                    throw new Exception('The cache path is not configured');
                }
                if (!isset($config['cache']['lifetime'])) {
                    throw new Exception('The cache lifetime is not configured');
                }
            }
        }
        return new CacheMiddleware($config['cache']);
    }
}